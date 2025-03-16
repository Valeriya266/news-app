export const formatDate = (data) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
    }

    return date.toLocalDatesString('en-US', options)
}