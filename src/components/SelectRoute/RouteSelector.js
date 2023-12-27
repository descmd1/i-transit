import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Routeselector.css'
// import * as apiCall from './routeApifunc'
import BusList from './BusList'

export default function RouteSelector() {
    const [dataInp, setData] = useState("")
    const [startCity, setStartCity] = useState('')
    const [destination, setDestination] = useState('')
    const handleToCity = e => {
        e.preventDefault()
        setDestination({ destination: e.target.value })
        localStorage.setItem("destination", e.target.value)
    }
    const renderBusList = (dataInp) => {
        if (Object.keys(dataInp).length > 0) {
            return (<BusList value={dataInp} />)
        }
    }
    const handleFromCity = e => {
        e.preventDefault()
        setStartCity({ startCity: e.target.value })
        localStorage.setItem("start", e.target.value)
        // console.log(startCity)
    }

    const getRoutes = e => {
        e.preventDefault()
        // console.log(startCity,destination)
        // apiCall.getRoutesFromApi(startCity.startCity, destination.destination)
        //     .then(response => response.data)
        //     .then(data => {
        //         setData(data.bus)
        //     })
    }

    const handleDate = e => {
        e.preventDefault()
        //    console.log(e.target.value)
        localStorage.setItem("date", e.target.value)
    }
    
    return (
        <div className="rdc">
            <div className="form-group inline"></div>
            <div className="main-container">
                <form className="form-inline" onSubmit={e => getRoutes(e)}>
                <select name="ad_account_selected" data-style="btn-new" class="selectpicker" onChange={e => { handleFromCity(e) }}>
                        <option>Park</option>
                        <option>Benue Links</option>
                        <option>Pleasure Travels</option>
                        <option>New Nyanyan</option>
                    </select>
                    <div className='inline-select'>
                    <select name="ad_account_selected" data-style="btn-new" class="selectpicker" onChange={e => { handleFromCity(e) }}>
                        <option>FROM</option>
                        <option>Makurdi</option>
                        <option>Gboko</option>
                        <option>Otukpo</option>
                    </select>
                    <select name="ad_account_selected" data-style="btn-new" class="selectpicker" onChange={e => { handleToCity(e) }}>
                        <option>TO</option>
                        <option>Abuja</option>
                        <option>Lagos</option>
                        <option>Makurdi</option>
                        <option>Port Harcourt</option>
                    </select>
                    </div>
                    <div className='date'>
                    <label>Date</label>
                    <input onChange={e => { handleDate(e) }} type="date" className='_date'></input>
                    </div>
                    <Link to="/form">
                    <input type="submit" className="btn" />
                    </Link>
                </form>

                <div>
                    {renderBusList(dataInp)}
                </div>
            </div>
        </div>
    )
}
