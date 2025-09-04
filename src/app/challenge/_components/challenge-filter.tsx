
'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from '@/components/ui/input';

export default function ChallengeFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleFilterChange = (filterName: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value && value !== 'all') {
            params.set(filterName, value);
        } else {
            params.delete(filterName);
        }
        replace(`${pathname}?${params.toString()}`);
    };

    const handleSearch = useDebouncedCallback((term: string) => {
        handleFilterChange('search', term);
    }, 300);

    return (
        <div className="flex flex-col md:flex-row items-center gap-4">
            <Input 
                placeholder="Search challenges by title, tag..."
                defaultValue={searchParams.get('search')?.toString()}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full md:max-w-sm"
            />
            <Select 
                defaultValue={searchParams.get('difficulty')?.toString() || 'all'}
                onValueChange={(value) => handleFilterChange('difficulty', value)}
            >
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by difficulty" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Difficulties</SelectItem>
                    <SelectItem value="Easy">Easy</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Hard">Hard</SelectItem>
                </SelectContent>
            </Select>
            <Select 
                defaultValue={searchParams.get('domain')?.toString() || 'all'}
                onValueChange={(value) => handleFilterChange('domain', value)}
            >
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by domain" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Domains</SelectItem>
                    <SelectItem value="DSA">DSA</SelectItem>
                    <SelectItem value="Web">Web</SelectItem>
                    <SelectItem value="AI">AI</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
