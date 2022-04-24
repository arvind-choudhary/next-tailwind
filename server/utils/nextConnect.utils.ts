export const onError = (err, req, res, next) => {
    res.status(err.statusCode ?? 500).json(err);
};

export const onNoMatch = (req, res) => {
    res.status(404).end("Page is not found");
}