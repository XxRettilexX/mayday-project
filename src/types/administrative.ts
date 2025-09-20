export interface AdministrativeService {
    id: string;
    title: string;
    description: string;
    steps: string[];
    link: string;
}

export interface AdministrativeState {
    services: AdministrativeService[];
    selectedService?: AdministrativeService;
    isLoading: boolean;
    error?: string;
}