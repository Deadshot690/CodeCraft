
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { user } from '@/lib/data';
import { toast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Switch } from '@/components/ui/switch';

export default function SettingsPage() {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email || '');
  const [avatar, setAvatar] = useState(user.avatarUrl);

  const [badgeAlerts, setBadgeAlerts] = useState(true);
  const [challengeReminders, setChallengeReminders] = useState(true);
  const [promoUpdates, setPromoUpdates] = useState(false);


  const handleSave = () => {
    // In a real app, you would send this data to your backend API
    console.log('Saving user data:', { 
        name, 
        email, 
        avatar,
        notifications: {
            badgeAlerts,
            challengeReminders,
            promoUpdates
        }
    });
    toast({
      title: 'Profile Updated',
      description: 'Your changes have been saved successfully.',
    });
  };
  
  const handleAvatarChange = () => {
      // In a real app, this might open a file picker.
      // Here, we'll just cycle through some placeholder images for demonstration.
      const currentIndex = PlaceHolderImages.findIndex(img => img.imageUrl === avatar);
      const nextIndex = (currentIndex + 1) % PlaceHolderImages.length;
      setAvatar(PlaceHolderImages[nextIndex].imageUrl);
  }

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
        <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl">
          Settings
        </h1>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="mx-auto grid max-w-4xl gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Update your personal information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={avatar} alt={name} />
                  <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <Button variant="outline" onClick={handleAvatarChange}>Change Avatar</Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Manage your notification preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                    <Label htmlFor="badge-alerts">New Badge Alerts</Label>
                    <p className="text-xs text-muted-foreground">
                        Receive notifications when you unlock a new badge.
                    </p>
                </div>
                <Switch
                  id="badge-alerts"
                  checked={badgeAlerts}
                  onCheckedChange={setBadgeAlerts}
                />
              </div>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                    <Label htmlFor="challenge-reminders">Daily Challenge Reminders</Label>
                    <p className="text-xs text-muted-foreground">
                        Get a reminder about the day's challenge.
                    </p>
                </div>
                <Switch
                  id="challenge-reminders"
                  checked={challengeReminders}
                  onCheckedChange={setChallengeReminders}
                />
              </div>
               <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                    <Label htmlFor="promo-updates">Promotional Updates</Label>
                    <p className="text-xs text-muted-foreground">
                        Receive news and special offers from CodeCraft.
                    </p>
                </div>
                <Switch
                  id="promo-updates"
                  checked={promoUpdates}
                  onCheckedChange={setPromoUpdates}
                />
              </div>
            </CardContent>
          </Card>
           <div className="flex justify-end">
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
