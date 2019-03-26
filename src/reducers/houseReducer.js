const initialState = {
    propertyName: '',
    address: '',
    city: '',
    state: '',
    zip: null,
    imageUrl: '',
    mortgage: null,
    rent: null,
};

const PROPERTY_NAME = 'propertyName';
const ADDRESS = 'address';
const CITY = 'city';
const STATE = 'state';
const ZIP = 'zip';
const IMAGEURL = 'imageUrl';
const MORTGAGE = 'mortgage';
const RENT = 'rent';
const CLEAR_STATE = 'clearState';


function houseReducer(state = initialState, action){
    switch(action.type){
        default: return state;

        case PROPERTY_NAME:
        return{
            ...state,
            propertyName: action.payload,
        };
        
        case ADDRESS:
        return{
            ...state,
            address: action.payload,
        };

        case CITY:
        return{
            ...state,
            city: action.payload,
        };

        case STATE:
        return{
            ...state,
            state: action.payload,
        };

        case ZIP:
        return{
            ...state,
            zip: action.payload,
        };

        case IMAGEURL:
        return{
            ...state,
            imageUrl: action.payload,
        };

        case MORTGAGE:
        return{
            ...state,
            mortgage: action.payload,
        };

        case RENT:
        return{
            ...state,
            rent: action.payload,
        };

        case CLEAR_STATE:
        return{
            ...initialState,
        };
    }
}

export function updatePropertyName(propertyName) {
    return {
            type: PROPERTY_NAME,
            payload: propertyName,
        } 
    }
export function updateAddress(address) {
    return {
            type: ADDRESS,
            payload: address,
        } 
    }
export function updateCity(city) {
    return {
            type: CITY,
            payload: city,
        } 
    }
export function updateState(state) {
    return {
            type: state,
            payload: STATE,
        } 
    }
export function updateZip(zip) {
    return {
            type: ZIP,
            payload: zip,
        } 
    }
export function updateImageUrl(imageUrl) {
    return {
            type: IMAGEURL,
            payload: imageUrl,
        } 
    }
export function updateRent(rent) {
    return {
            type: RENT,
            payload: rent,
        } 
    }
export function updateMortgage(mortgage) {
    return {
            type: MORTGAGE,
            payload: mortgage,
        } 
    }
export function clearState(){
    return{
        type: CLEAR_STATE,
    }
}

export default houseReducer;


