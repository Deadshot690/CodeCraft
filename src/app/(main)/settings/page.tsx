
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

export default function SettingsPage() {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email || '');
  const [avatar, setAvatar] = useState(user.avatarUrl);

  const handleSave = () => {
    // In a real app, you would send this data to your backend API
    console.log('Saving user data:', { name, email, avatar });
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
            <CardContent>
              {/* Placeholder for notification settings */}
              <p className="text-sm text-muted-foreground">Notification settings will be available in a future update.</p>
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
