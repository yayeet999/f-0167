import { supabase } from './client';

export const createAvatarBucket = async () => {
  const { data, error } = await supabase
    .storage
    .createBucket('avatars', {
      public: true,
      fileSizeLimit: 2097152, // 2MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif']
    });

  if (error) {
    console.error('Error creating avatars bucket:', error);
    return;
  }

  console.log('Avatars bucket created successfully:', data);
};