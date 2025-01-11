import { create } from 'zustand'
import { AdminData } from '../features/Dashboard/types'
import { getData, post, updateEndpoint, deleteEndpoint } from '../services/api';
import { AdminSchema } from '../features/Dashboard/schemas/registerUser';

interface AdminState {
    userAdmin: AdminData[] | null;
    loading: boolean;
    error: string | null;
    getAdmins: () => Promise<void>;
    createAdmin: (data: AdminSchema) => Promise<void>;
    updateAdmin: ( id: string | number, data: AdminSchema) => Promise<void>;
    deleteAdmin: (id: string | number) => Promise<void>;
}

export const useAdminStore = create<AdminState>()((set, get) => ({
            userAdmin: [],
            loading: false,
            error: null,
            getAdmins: async () => {
                set({ loading: true, error: '' });
                try {
                    const resp = await getData('api/v1/admin/search-alls');
                    set({ userAdmin: resp.admins, loading: false });
                } catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            },
            createAdmin: async (data: AdminSchema) => {
                set({ loading: true, error: '' });
                try {
                    await post('api/v1/admin/register', data);
                    set({ loading: false });

                    await get().getAdmins();
                } catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            },
            updateAdmin: async (id: string|number, data: AdminSchema) => {
                set({ loading: true, error: '' });
                try {
                    await updateEndpoint('api/v1/admin/update', id, data);
                    set({ loading: false });

                    await get().getAdmins();
                }catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            },
            deleteAdmin: async (id: string|number) => {
                set({ loading: true, error: '' });
                try {
                    await deleteEndpoint(`api/v1/admin/delete/${id}`);
                    set({ loading: false });

                    await get().getAdmins();
                }catch (err: any) {
                    set({ error: err.message, loading: false });
                }
            }
        })
)