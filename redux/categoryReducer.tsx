export function CategoryReducer (state: [], action: any) {
    if (typeof state == 'undefined') {
        return []
    }
    if (action.type == 'FAVORITE') {
        return [...state, action.payload];
    }
    if (action.type == 'DELETE') {
        const filteredData = state.filter((item: any) => item.id !== action.payload)
        return [...filteredData]
    }
}