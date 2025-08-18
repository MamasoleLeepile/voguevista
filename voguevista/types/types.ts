export type RegisterInputProps={
    fullName: string;
    email: string;
    password: string;
    phone: string;
    role: any;
};

export type LandLordRegisterProps={
    fullName: string;
    email: string;
    password: string;
    phone: string;
    role: any;
};

export type LoginInputProps={
    email: string;
    password: string;
};

export type ListingProps ={
    location: string;
    description: string;
    imageUrl: string;
    price: string;
    distance: string;
    landlordId: string;
}

export type ReservationProps ={
    names: string;
    phoneNumber: string;
    occupation: string;
    popImage: string;
    userId?: string;
    listingId?: string; 
}

export type ReviewProps ={
    names: string;
    occupation: string;
    message: string;
}