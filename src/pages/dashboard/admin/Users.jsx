import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Users = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: 'users',
        queryFn: async () => {
            const response = await axiosSecure.get('/users');
            return response.data;
        },
    });

    const handleRoleChange = (id, newRole) => {
        Swal.fire({
            title: `Are you sure?`,
            text: `The user will be assigned the role of ${newRole}.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: `Yes, Make ${newRole}!`,
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .patch(`/users/role/${id}`, { role: newRole })
                    .then((res) => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: 'Role Updated!',
                                text: `User role has been updated to ${newRole}.`,
                                icon: 'success',
                            });
                        }
                    })
                    .catch((err) => {
                        console.error('Error updating role:', err);
                        Swal.fire({
                            title: 'Failed!',
                            text: 'Failed to update user role.',
                            icon: 'error',
                        });
                    });
            }
        });
    };

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure
                    .delete(`/users/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'User has been deleted.',
                                icon: 'success',
                            });
                        }
                    })
                    .catch((err) => {
                        console.error('Error deleting user:', err);
                        Swal.fire({
                            title: 'Failed!',
                            text: 'Failed to delete user.',
                            icon: 'error',
                        });
                    });
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <div className="max-w-5xl mx-auto">
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Total Users ({users.length})
                    </h2>
                </div>

                <div className="overflow-x-auto rounded-xl">
                    <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg shadow-md">
                        {/* Table Head */}
                        <thead className="text-center bg-yellow-400 dark:bg-yellow-600 text-white">
                            <tr>
                                <th className="px-4 py-2">#</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            {users.map((user, index) => (
                                <tr key={user._id} className="border-t border-gray-300 dark:border-gray-700">
                                    <th className="px-4 py-2">{index + 1}</th>
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.role || 'Normal User'}</td>
                                    <td>
                                        <div className="flex flex-wrap justify-center items-center px-4 gap-2">
                                            {/* Role Buttons */}
                                            <button
                                                className="px-3 py-1 text-sm font-medium text-white bg-blue-500 dark:bg-blue-600 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700"
                                                onClick={() => handleRoleChange(user._id, 'admin')}
                                            >
                                                Make Admin
                                            </button>
                                            <button
                                                className="px-3 py-1 text-sm font-medium text-white bg-green-500 dark:bg-green-600 rounded-lg hover:bg-green-600 dark:hover:bg-green-700"
                                                onClick={() => handleRoleChange(user._id, 'teacher')}
                                            >
                                                Make Teacher
                                            </button>
                                            <button
                                                className="px-3 py-1 text-sm font-medium text-white bg-yellow-500 dark:bg-yellow-600 rounded-lg hover:bg-yellow-600 dark:hover:bg-yellow-700"
                                                onClick={() => handleRoleChange(user._id, 'normal')}
                                            >
                                                Make Normal
                                            </button>
                                            {/* Delete Button */}
                                            <button
                                                className="px-3 py-1 text-sm font-medium text-white bg-red-500 dark:bg-red-600 rounded-lg hover:bg-red-600 dark:hover:bg-red-700"
                                                onClick={() => handleDeleteUser(user._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
