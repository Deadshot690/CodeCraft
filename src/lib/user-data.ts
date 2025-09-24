import type { User, Badge } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const user: User = {
    uid: '123',
    name: 'Alex',
    email: 'alex@example.com',
    avatarUrl: 'https://picsum.photos/seed/avatar/100/100',
    xp: 750,
    level: 5,
    xpToNextLevel: 1000,
    streak: 12,
    badges: [
      { id: '1', name: 'Python Pro', icon: PlaceHolderImages[0].imageUrl, description: 'Master of Python' },
      { id: '2', name: 'JS Master', icon: PlaceHolderImages[1].imageUrl, description: 'Wizard of the Web' },
      { id: '3', name: '5-Day Streak', icon: PlaceHolderImages[2].imageUrl, description: 'On Fire!' },
      { id: '4', name: 'First Challenge', icon: PlaceHolderImages[3].imageUrl, description: 'The Journey Begins' },
    ],
    completedTasks: [],
  };
  