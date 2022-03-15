export interface Login {
    authenticity_token?: string;
    login:{
        email: string;
        password: string;
    }
    user?:any;
}

export interface userLoginResponse  {
    next_url: string;
    next_action: string;
    account: string;
}