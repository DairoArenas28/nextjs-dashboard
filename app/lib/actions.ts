'use server';

import { z } from 'zod';

export async function createInvoice(formData: FormData) {
    const rawFormData = {
        customerrId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };

    console.log(rawFormData);
    console.log(typeof rawFormData.amount);
}