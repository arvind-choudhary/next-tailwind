export const onError = (err, req, res, next) => {
    const isDev = process.env.NODE_ENV !== 'development';
    const jsonResp = isDev ? err : { success: err?.success ?? false, messages: err?.cause?.details.map((a) => a.message) || err?.message };
    res.status(err.statusCode ?? 500).json(jsonResp);
};

export const onNoMatch = (req, res) => {
    res.status(404).end("Page is not found");
}