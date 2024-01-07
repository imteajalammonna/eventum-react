const getStoredService = () => {
    const storedService = localStorage.getItem('service');
    if (storedService) {
        return JSON.parse(storedService);
    }
    return [];

}

const SetNewServiceLS = (id) => {
    const storedServices = getStoredService();
    const exists = storedServices.find(serviceId => serviceId === id);
    if (!exists) {
        storedServices.push(id);
        localStorage.setItem('service', JSON.stringify(storedServices))
    }

}
export { SetNewServiceLS, getStoredService };