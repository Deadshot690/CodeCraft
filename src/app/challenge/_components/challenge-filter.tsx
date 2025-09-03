
'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';
import { getAllChallenges } from '@/lib/challenges';

export default function ChallengeFilter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const allTags = [...new Set(getAllChallenges().flatMap(c => c.tags))];

    const handleFilterChange = (filterName: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value && value !== 'all') {
            params.set(filterName, value);
        } else {
            params.delete(filterName);
        }
        replace(`${pathname}?${params.toString()}`);
    };

    const resetFilters = () => {
        const params = new URLSearchParams(searchParams);
        params.delete('status');
        params.delete('difficulty');
        params.delete('tag');
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="flex flex-col md:flex-row items-center gap-4">
            <Select 
                defaultValue={searchParams.get('status')?.toString() || 'all'}
                onValueChange={(value) => handleFilterChange('status', value)}
            >
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="solved">Solved</SelectItem>
                    <SelectItem value="unsolved">Unsolved</SelectItem>
                </SelectContent>
            </Select>

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
                defaultValue={searchParams.get('tag')?.toString() || 'all'}
                onValueChange={(value) => handleFilterChange('tag', value)}
            >
                <SelectTrigger className="w-full md:w-[240px]">
                    <SelectValue placeholder="Filter by tag" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Tags</SelectItem>
                    {allTags.map(tag => (
                        <SelectItem key={tag} value={tag}>{tag}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Button variant="ghost" onClick={resetFilters} className="flex items-center gap-2">
                <XCircle className="h-4 w-4" />
                Reset Filters
            </Button>
        </div>
    );
}
