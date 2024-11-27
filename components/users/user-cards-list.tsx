import UserCard from "./user-card"
import { User } from "@/types/user"


interface UserCardsListProps {
  users: User[];
}



export default function UserCardsList({ users }: UserCardsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {users.map((user) => (
        <UserCard key={user?.id}
        id={user?.id ?? ''}
        name={user?.name ?? 'Unknown'}
        email={user?.email ?? 'No email'}
        role={user?.role ?? 'No role'}
        image={user?.image ?? 'default-image.jpg'}/>
      ))}
    </div>
  )
}
