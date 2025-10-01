import { useEffect, useState } from 'react';
import { type Guide } from '../types/administrative';
import { fetchGuides, fetchGuideById } from '../ services/administrativeService';

export function useAdministrativeVm() {
    const [guides, setGuides] = useState<Guide[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetchGuides().then(g => {
            setGuides(g);
            setLoading(false);
        });
    }, []);

    return { guides, loading };
}

export function useGuideDetailVm(id?: string) {
    const [guide, setGuide] = useState<Guide | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetchGuideById(id).then(g => {
            setGuide(g);
            setLoading(false);
        });
    }, [id]);

    return { guide, loading };
}
