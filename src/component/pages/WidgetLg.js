import React from "react";
import ".././styles/widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetlgBtn " + type}>{type}</button>;
  };
  return (
    <div className="widgetlg">
      <h3>Latest Transitions</h3>
      <table className="widgetlgTable">
        <tr className="widgetlgTr">
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Amount</th>
          <th className="widgetlgTh">Status</th>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="/assets/images/profile.jpg" alt="profile" />
            <span className="widgetlgUserName">Kamrul islam</span>
          </td>
          <td className="widgetlgDate">2 Jun 2021</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="/assets/images/profile.jpg" alt="profile" />
            <span className="widgetlgUserName">Kamrul islam</span>
          </td>
          <td className="widgetlgDate">2 Jun 2021</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="/assets/images/profile.jpg" alt="profile" />
            <span className="widgetlgUserName">Kamrul islam</span>
          </td>
          <td className="widgetlgDate">2 Jun 2021</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="/assets/images/profile.jpg" alt="profile" />
            <span className="widgetlgUserName">Kamrul islam</span>
          </td>
          <td className="widgetlgDate">2 Jun 2021</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="/assets/images/profile.jpg" alt="profile" />
            <span className="widgetlgUserName">Kamrul islam</span>
          </td>
          <td className="widgetlgDate">2 Jun 2021</td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
