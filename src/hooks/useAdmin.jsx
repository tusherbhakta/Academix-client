import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useAdmin = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log(response.data);
            return response.data
        },
    })
    return [isAdmin, isAdminLoading];

}

export default useAdmin