
export interface UserAddress {
    city: string
    street: string
    zipcode: string
}

export interface User {
    name: string
    email: string
    address: UserAddress
}
