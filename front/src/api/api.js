export const uploadFile = async (formData) => {
    try {
        const response = await axios.post('/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Upload error:', error);
        throw error;
    }
}; 


