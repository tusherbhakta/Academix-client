import { useQuery } from '@tanstack/react-query';
// import SectionTitle from '../../components/ui/SectiontTitle';
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
        <div>
            {/* <SectionTitle heading="All Users" subHeading="Manage All Users" /> */}

            <div className="max-w-5xl mx-auto">
                <div className="">
                    <h2>Total Users ({users.length})</h2>
                </div>

                <div className="overflow-x-auto rounded-xl">
                    <table className="table table-zebra">
                        {/* Table Head */}
                        <thead className="text-center bg-yolo/80 text-white">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role || 'Normal User'}</td>
                                    <td>
                                        <div className="w-full flex justify-center items-center px-4">
                                            {/* Role Buttons */}
                                            <button
                                                className="btn btn-sm btn-primary mx-1"
                                                onClick={() => handleRoleChange(user._id, 'admin')}
                                            >
                                                Make Admin
                                            </button>
                                            <button
                                                className="btn btn-sm btn-secondary mx-1"
                                                onClick={() => handleRoleChange(user._id, 'teacher')}
                                            >
                                                Make Teacher
                                            </button>
                                            <button
                                                className="btn btn-sm btn-warning mx-1"
                                                onClick={() => handleRoleChange(user._id, 'normal')}
                                            >
                                                Make Normal
                                            </button>
                                            {/* Delete Button */}
                                            <button
                                                className="btn btn-sm btn-error mx-1"
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
