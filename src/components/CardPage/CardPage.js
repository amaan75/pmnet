import React from "react"
import "./cardpage.scss";
class CardPage extends React.Component {
    render() {
        return (
            <div className="pmnet-card-app-container">
                <table
                    cellPadding={0} cellSpacing={0} width="100%">
                    <tbody>
                        <tr>
                            <td>
                                HEADING 1
                            </td>
                            <td>
                                HEADING  2
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="pmnet-card-content">
                    <table>
                        <tr>
                            <td colSpan={2} rowSpan={5}>
                                <div >
                                    <img src="https://www.unionbankofindia.co.in/Images/Contactless-Debit-Card-Visa.png" className="pmnet-card-image" />
                                </div>
                            </td>
                            <td>

                                <div className="pmnet-content-buttons">
                                    <button>
                                        cancel
                    </button>
                                    <button>
                                        next
                    </button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default CardPage;