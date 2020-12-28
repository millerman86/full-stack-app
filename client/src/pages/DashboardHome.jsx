import {PromiseProvider} from 'mongoose'
import React, {Component} from 'react'
import CanvasJSReact from '../canvasjs.react'

let CanvasJS = CanvasJSReact.CanvasJS
let CanvasJSChart = CanvasJSReact.CanvasJSChart


export default (props) => {

    function addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];
        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;
        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }


    const barChartOptionsByPriority = {
        // animationEnabled: true,
        theme: "light2",
        title: {
            text: "N/A"
        },
        axisX: {
            title: "Social Network",
            reversed: true,
        },
        axisY: {
            // title: "Number of Tickets by Priority",
            includeZero: true,
            labelFormatter: addSymbols,
        },
        data: [{
            type: "column",
            dataPoints: [
                {y: 0, label: "High"},
                {y: 3, label: "Medium"},
                {y: 2, label: "Low"},
                {y: 4, label: "None"},
            ]
        }]
    }

    const barChartOptionsByStatus = {
        // animationEnabled: true,
        theme: "light2",
        title: {
            text: "N/A"
        },
        axisX: {
            title: "Social Network",
            reversed: true,
        },
        axisY: {
            // title: "Number of Tickets by Status",
            includeZero: true,
            labelFormatter: addSymbols,
        },
        data: [{
            type: "column",
            dataPoints: [
                {y: 0, label: "Additional Info Required"},
                {y: 0, label: "Reactivated"},
                {y: 3, label: "In Progress"},
                {y: 2, label: "Open"},
                {y: 4, label: "New"},
            ]
        }]
    }

    const bugsErrorsPieChartOptions = {
        // animationEnabled: true,
        exportFileName: "New Year Resolutions",
        exportEnabled: true,
        title: {
            text: "Bugs/Errors"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            dataPoints: [
                {y: 32, label: "Health"},
                {y: 22, label: "Finance"},
                {y: 15, label: "Education"},
                {y: 19, label: "Career"},
                {y: 5, label: "Family"},
                {y: 7, label: "Real Estate"}
            ]
        }]
    }

    const pieChartOptions = {
        // animationEnabled: true,
        exportFileName: "New Year Resolutions",
        exportEnabled: true,
        title: {
            text: "Daniel Dean 5"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            dataPoints: [
                {y: 32, label: "Health"},
                {y: 22, label: "Finance"},
                {y: 15, label: "Education"},
                {y: 19, label: "Career"},
                {y: 5, label: "Family"},
                {y: 7, label: "Real Estate"}
            ]
        }]
    }

    return (
        <div className="dashboard-home">

            <div className="pie-grid">

                <div>
                    <CanvasJSChart options={barChartOptionsByPriority}/>
                    <h2 className="tickets-by">Tickets By Priority</h2>
                </div>
                <div>
                    <CanvasJSChart options={bugsErrorsPieChartOptions}/>
                    <h2 className="tickets-by">Tickets by Type</h2>
                </div>

            </div>

            <div className="pie-grid">

                <div>
                    <CanvasJSChart options={barChartOptionsByStatus}/>
                    <h2 className="tickets-by">Tickets by Status</h2>
                </div>
                <div>
                    <CanvasJSChart options={pieChartOptions}/>
                    <h2 className="tickets-by">Tickets by Developer</h2>
                </div>

            </div>

        </div>)
}

// Suggestable Types
// Task. A task represents work that needs to be done.
// Subtask. A subtask is a piece of work that is required to complete a task. ...
// Epic. A big user story that needs to be broken down. ...
// Bug. A bug is a problem which impairs or prevents the functions of a product.
// Story. ...
// Task. ...
// Subtask. ...
// Change.