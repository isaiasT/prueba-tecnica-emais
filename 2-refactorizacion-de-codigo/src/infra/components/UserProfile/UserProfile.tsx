import { User, UserAddress } from "../../../domain/models/User";

const UserProfileAddress: React.FC<{ address: UserAddress }> = ({ address }) => {
    const { city, street, zipcode } = address;

    return (
        <>
            <p>{city}</p>
            <p>{street}</p>
            <p>{zipcode}</p>
        </>
    );
};

const UserProfile: React.FC<{ user: User }> = ({ user }) => {
    const { name, email, address } = user;

    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <UserProfileAddress address={address} />
        </div>
    );
};

export default UserProfile
