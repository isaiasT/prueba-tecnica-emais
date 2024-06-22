interface User {
    id: number;
    name: string;
    email: string;
}

const fetchUserData = async (userId: number): Promise<User> => {
    const response = await fetch(`/api/users/${userId}`);
    const userData: User = await response.json();
    return userData;
};

const logUserName = (user: User) => {
    console.log(user.name);
};

fetchUserData(123).then(logUserName);