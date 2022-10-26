export default function isValidDate(d:any) {
    return d instanceof Date && !Number.isNaN(Number(d.getTime()));
}
