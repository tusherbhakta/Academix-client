import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useTeacher = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isTeacher, isPending: isTeacherLoading } = useQuery({
        queryKey: [user?.email, 'isTeacher'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/teacher/${user.email}`)
            console.log(response.data);
            return response.data
        },
    })
    return [isTeacher, isTeacherLoading];

}

export default useTeacher