import {combineReducers} from 'redux'
import incomes from './income'
import expenditures from './expenditure'
export default  combineReducers({
    incomes,
    expenditures
})