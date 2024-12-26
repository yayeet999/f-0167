import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen, Search, FileText, Grid, 
  List, Clock, Star, ChevronRight
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const LibraryView = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: content, isLoading } = useQuery({
    queryKey: ['library-content'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('generated_content')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const filteredContent = content?.filter(item => {
    if (activeFilter === 'all') return true;
    return item.type.toLowerCase() === activeFilter;
  }).filter(item => {
    if (!searchQuery) return true;
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const getColorScheme = (type: string) => {
    const schemes = {
      'blog': { bg: 'bg-cyan-50', text: 'text-cyan-900', icon: 'text-cyan-800' },
      'story': { bg: 'bg-green-50', text: 'text-green-900', icon: 'text-green-800' },
      'novel': { bg: 'bg-orange-50', text: 'text-orange-900', icon: 'text-orange-800' },
      'business': { bg: 'bg-fuchsia-50', text: 'text-fuchsia-900', icon: 'text-fuchsia-800' },
      'course': { bg: 'bg-emerald-50', text: 'text-emerald-900', icon: 'text-emerald-800' }
    };
    return schemes[type.toLowerCase()] || { bg: 'bg-gray-50', text: 'text-gray-900', icon: 'text-gray-800' };
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search library..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select defaultValue="recent">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="type">Type</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2 bg-gray-50 p-1 rounded-lg">
              <Button
                variant={view === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setView('grid')}
                className="h-8 w-8 p-0"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={view === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setView('list')}
                className="h-8 w-8 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {['All', 'Blog', 'Story', 'Novel', 'Business', 'Course'].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter.toLowerCase() ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className="rounded-lg px-4"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className={`grid gap-6 ${
        view === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {isLoading ? (
          // Loading skeleton
          Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-0">
                <div className="h-40 bg-gray-100" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-1/4" />
                  <div className="h-6 bg-gray-100 rounded w-3/4" />
                  <div className="h-4 bg-gray-100 rounded w-1/2" />
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          filteredContent?.map((item) => {
            const colorScheme = getColorScheme(item.type);
            return (
              <Card 
                key={item.id}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`h-40 ${colorScheme.bg} p-6 flex items-center justify-center`}>
                    <BookOpen className={`w-8 h-8 ${colorScheme.icon}`} />
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium ${colorScheme.text}`}>
                        {item.type}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity h-7 w-7 p-0"
                      >
                        <Star className="w-4 h-4" />
                      </Button>
                    </div>

                    <h3 className="font-medium text-gray-900 line-clamp-1 mb-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>
                          {new Date(item.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      <span>{item.content.split(' ').length} words</span>
                    </div>
                  </div>

                  <div className="h-12 border-t flex items-center justify-end px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button variant="ghost" size="sm">
                      Open <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default LibraryView;