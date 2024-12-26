import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  safelist: [
    // Add background colors
    'bg-cyan-50', 'bg-green-50', 'bg-gray-50', 'bg-stone-50',
    'bg-orange-50', 'bg-fuchsia-50', 'bg-red-50', 'bg-emerald-50',
    'bg-yellow-50', 'bg-lime-50', 'bg-zinc-50',
    // Add text colors
    'text-cyan-900', 'text-green-900', 'text-gray-900', 'text-stone-900',
    'text-orange-900', 'text-fuchsia-900', 'text-red-900', 'text-emerald-900',
    'text-yellow-900', 'text-lime-900', 'text-zinc-900',
    // Add accent colors
    'text-violet-600', 'text-yellow-600', 'text-blue-600', 'text-orange-600',
    'text-sky-600', 'text-lime-600', 'text-slate-600', 'text-pink-600',
    'text-purple-600', 'text-red-600', 'text-teal-600',
    // Add hover states
    'hover:bg-violet-600/90', 'hover:bg-yellow-600/90', 'hover:bg-blue-600/90',
    'hover:bg-orange-600/90', 'hover:bg-sky-600/90', 'hover:bg-lime-600/90',
    'hover:bg-slate-600/90', 'hover:bg-pink-600/90', 'hover:bg-purple-600/90',
    'hover:bg-red-600/90', 'hover:bg-teal-600/90',
    // Add background accent colors
    'bg-violet-600', 'bg-yellow-600', 'bg-blue-600', 'bg-orange-600',
    'bg-sky-600', 'bg-lime-600', 'bg-slate-600', 'bg-pink-600',
    'bg-purple-600', 'bg-red-600', 'bg-teal-600'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			animation: {
				'gradient-x': 'gradient-x 15s ease infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			keyframes: {
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
