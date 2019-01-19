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
                                HEADING 2
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="pmnet-card-content">
                    <button>
                        cancel
                    </button>
                    <button>
                        next
                    </button>
                </div>
            </div>
        )
    }
}

export default CardPage;