export default function isValidDate(d:any) {
    // https://stackoverflow.com/a/1353711/11236
    return d instanceof Date && !Number.isNaN(Number(d.getTime()));
}
