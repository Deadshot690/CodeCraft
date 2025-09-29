
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { user } from '@/lib/data';
import { toast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Lock, 
  Code, 
  Bell, 
  Shield, 
  Paintbrush, 
  Settings as SettingsIcon 
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { useSettings } from '@/hooks/use-settings';

const languageDisplay: Record<string, string> = {
    en: 'English',
    hi: 'Hindi',
    es: 'Spanish',
};

const ProfileSettings = () => {
    const { settings, setSetting } = useSettings();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>This is how others will see you on the site.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src={settings.avatarUrl} alt={settings.name} />
                        <AvatarFallback>{settings.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <Button variant="outline">Change Avatar</Button>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" value={settings.username} onChange={(e) => setSetting('username', e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="name">Display Name</Label>
                    <Input id="name" value={settings.name} onChange={(e) => setSetting('name', e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="bio">About Me</Label>
                    <Textarea id="bio" value={settings.bio} onChange={(e) => setSetting('bio', e.target.value)} placeholder="Tell us a little bit about yourself" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" value={settings.location} onChange={(e) => setSetting('location', e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <Input id="github" value={settings.github} onChange={(e) => setSetting('github', e.target.value)} placeholder="https://github.com/your-username" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input id="linkedin" value={settings.linkedin} onChange={(e) => setSetting('linkedin', e.target.value)} placeholder="https://linkedin.com/in/your-profile" />
                </div>
            </CardContent>
        </Card>
    )
}

const AccountSettings = () => {
    const [email, setEmail] = useState(user.email || '');
    const [isTwoFactor, setIsTwoFactor] = useState(false);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Manage your account settings and connected services.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="current-password">Change Password</Label>
                    <Input id="current-password" type="password" placeholder="Current Password"/>
                    <Input id="new-password" type="password" placeholder="New Password"/>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                        <p className="text-xs text-muted-foreground">
                            Enhance your account security with 2FA.
                        </p>
                    </div>
                    <Switch
                        id="two-factor"
                        checked={isTwoFactor}
                        onCheckedChange={setIsTwoFactor}
                    />
                </div>
                 <div className="rounded-lg border p-4">
                    <Label>Connected Accounts</Label>
                    <div className="mt-2 flex flex-col gap-3">
                       <div className="flex items-center justify-between">
                            <span>Google</span>
                            <Button variant="secondary">Connected</Button>
                       </div>
                        <div className="flex items-center justify-between">
                            <span>GitHub</span>
                            <Button variant="outline">Connect</Button>
                       </div>
                    </div>
                </div>
                <div className="rounded-lg border border-destructive/50 p-4">
                    <Label className="text-destructive">Danger Zone</Label>
                     <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">Deactivate your account.</p>
                        <Button variant="destructive" >Deactivate</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

const EditorPreferences = () => {
    const { settings, setSetting } = useSettings();
    const [fontSize, setFontSize] = useState(14);
    const [autocomplete, setAutocomplete] = useState(true);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Editor & Practice</CardTitle>
                <CardDescription>Customize your coding environment and challenge preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label>Default Language</Label>
                    <Select value={settings.language} onValueChange={(value) => setSetting('language', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="javascript">JavaScript</SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                             <SelectItem value="cpp">C++</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label>Editor Theme</Label>
                    <Select value={settings.theme} onValueChange={(value: 'dark' | 'light') => setSetting('theme', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="dark">Okaidia (Dark)</SelectItem>
                            <SelectItem value="light">Default Light</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>Font Size</Label>
                    <Input type="number" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="autocomplete">Enable Autocomplete</Label>
                        <p className="text-xs text-muted-foreground">
                            Get suggestions as you type.
                        </p>
                    </div>
                    <Switch
                        id="autocomplete"
                        checked={autocomplete}
                        onCheckedChange={setAutocomplete}
                    />
                </div>
            </CardContent>
        </Card>
    )
}

const NotificationSettings = () => {
    const [badgeAlerts, setBadgeAlerts] = useState(true);
    const [challengeReminders, setChallengeReminders] = useState(true);
    const [promoUpdates, setPromoUpdates] = useState(false);

    return (
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
    );
}

const PrivacySettings = () => {
    const [profileVisibility, setProfileVisibility] = useState('public');
    const [showActivity, setShowActivity] = useState(true);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Control who can see your profile and activity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                 <div className="space-y-2">
                    <Label>Profile Visibility</Label>
                    <Select value={profileVisibility} onValueChange={setProfileVisibility}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="show-activity">Show Activity on Leaderboard</Label>
                    </div>
                    <Switch
                        id="show-activity"
                        checked={showActivity}
                        onCheckedChange={setShowActivity}
                    />
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">Export your account data.</p>
                    <Button variant="outline">Export Data</Button>
                </div>
            </CardContent>
        </Card>
    )
}

const FunSettings = () => {
    const { settings, setSetting } = useSettings();

    return (
         <Card>
            <CardHeader>
                <CardTitle>Fun & Personalization</CardTitle>
                <CardDescription>Make CodeCraft your own.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="sounds">Sound Effects</Label>
                        <p className="text-xs text-muted-foreground">
                            Enable sounds for achievements and actions.
                        </p>
                    </div>
                    <Switch
                        id="sounds"
                        checked={settings.sounds}
                        onCheckedChange={(checked) => setSetting('sounds', checked)}
                    />
                </div>
                 <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="animations">Background Animations</Label>
                        <p className="text-xs text-muted-foreground">
                           Enable subtle background effects.
                        </p>
                    </div>
                    <Switch
                        id="animations"
                        checked={settings.animations}
                        onCheckedChange={(checked) => setSetting('animations', checked)}
                    />
                </div>
            </CardContent>
        </Card>
    )
}

const SystemSettings = () => {
    const { settings, setSetting } = useSettings();
    const [timeFormat, setTimeFormat] = useState('12h');

    return (
        <Card>
            <CardHeader>
                <CardTitle>System</CardTitle>
                <CardDescription>Manage language, accessibility, and performance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label>Language</Label>
                    <Select value={settings.appLanguage} onValueChange={(value) => setSetting('appLanguage', value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="hi">Hindi</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>Time Format</Label>
                    <Select value={timeFormat} onValueChange={setTimeFormat}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a format" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="12h">12-hour</SelectItem>
                            <SelectItem value="24h">24-hour</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <Label htmlFor="high-contrast">High Contrast Mode</Label>
                        <p className="text-xs text-muted-foreground">
                            Improves readability for visually impaired users.
                        </p>
                    </div>
                    <Switch
                        id="high-contrast"
                        checked={settings.highContrast}
                        onCheckedChange={(checked) => setSetting('highContrast', checked)}
                    />
                </div>
            </CardContent>
        </Card>
    )
}


export default function SettingsPage() {
    const { settings, resetSettings } = useSettings();

    const handleSave = () => {
        // The useSettings hook already saves to localStorage on change,
        // but we can show a toast for user feedback.
        toast({
            title: 'Settings Saved',
            description: 'Your preferences have been updated successfully.',
        });
    };

    const handleReset = () => {
        resetSettings();
        toast({
            title: 'Settings Reset',
            description: 'Your preferences have been reset to the defaults.',
            variant: 'destructive',
        });
    }

    const tabs = [
        { value: 'profile', label: 'Profile', icon: User, component: <ProfileSettings /> },
        { value: 'account', label: 'Account', icon: Lock, component: <AccountSettings /> },
        { value: 'editor', label: 'Editor & Practice', icon: Code, component: <EditorPreferences /> },
        { value: 'notifications', label: 'Notifications', icon: Bell, component: <NotificationSettings /> },
        { value: 'privacy', label: 'Privacy & Security', icon: Shield, component: <PrivacySettings /> },
        { value: 'personalization', label: 'Personalization', icon: Paintbrush, component: <FunSettings /> },
        { value: 'system', label: 'System', icon: SettingsIcon, component: <SystemSettings /> },
    ]

    return (
        <div className="flex flex-col h-screen">
            <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
                <h1 className="font-headline text-xl font-bold tracking-tight md:text-2xl">
                    Settings ({languageDisplay[settings.appLanguage] || 'English'})
                </h1>
            </header>
            <div className="flex-1 overflow-auto">
                <Tabs defaultValue="profile" className="flex flex-col md:flex-row gap-8 p-4 md:p-8">
                    <TabsList className="flex flex-row md:flex-col h-auto justify-start items-start gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                        {tabs.map(tab => (
                            <TabsTrigger key={tab.value} value={tab.value} className="w-full justify-start gap-2 text-base md:text-sm">
                                <tab.icon className="h-4 w-4" />
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="flex-1 max-w-4xl">
                        {tabs.map(tab => (
                            <TabsContent key={tab.value} value={tab.value}>
                                {tab.component}
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
             <footer className="sticky bottom-0 z-10 mt-auto flex items-center justify-end gap-4 border-t bg-background/80 p-4 backdrop-blur-sm">
                <Button variant="outline" onClick={handleReset}>Reset to Defaults</Button>
                <Button onClick={handleSave}>Save Changes</Button>
            </footer>
        </div>
    );
}
