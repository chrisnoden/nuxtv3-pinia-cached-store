import { defineCachedStore } from 'pinia-cached-store';
import getNationality from '~/services/name-service';

export const useNameStore = defineCachedStore({
    id: 'name',

    state: () => ({
        nationalitites: [] as string[],
    }),

    async refresh( name:string ) {
        this.$state = await getNationality(name);
    }
});
