<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="TRAIN.aspx.cs" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <p style="text-align: center; font-size: 26px; color: #663300;">
        <asp:Label ID="Label15" runat="server" Font-Bold="True" Font-Size="X-Large" Font-Underline="True" ForeColor="#663300" Text="Travel by Train"></asp:Label>
        </p>
<p style="text-align: center; font-size: 26px; color: #663300;">
            <asp:LinkButton ID="LinkButton12" runat="server" OnClick="LinkButton12_Click" ForeColor="#663300">Amritsar</asp:LinkButton>
&nbsp;|
            <asp:LinkButton ID="LinkButton13" runat="server" OnClick="LinkButton13_Click" ForeColor="#663300">Bathinda</asp:LinkButton>
&nbsp;|
            <asp:LinkButton ID="LinkButton14" runat="server" OnClick="LinkButton14_Click" ForeColor="#663300">Chandigarh</asp:LinkButton>
&nbsp;|
            <asp:LinkButton ID="LinkButton15" runat="server" OnClick="LinkButton15_Click" ForeColor="#663300">Jalandhar</asp:LinkButton>
&nbsp;|
            <asp:LinkButton ID="LinkButton16" runat="server" OnClick="LinkButton16_Click" ForeColor="#663300">Ludhiana</asp:LinkButton>
        </p>
    <div style="overflow: scroll; height: 1379px; text-align: center;position:absolute; top: 103px; left: 119px;">
        <p id="Amritsar" align="center">
            <b style="mso-bidi-font-weight: normal; ">AMRITSAR</b></p>
        <table border="1" cellpadding="0" cellspacing="1" style="width: 472.4pt; mso-cellspacing: .7pt; background: white; mso-yfti-tbllook: 1184; line-height: 115%; font-size: 11.0pt; font-family: Calibri, sans-serif;" width="630">
            <tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt; font-weight: bold;" width="169">
                    <p align="center" style="font-weight: bold;">
                        Name<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center" style="font-weight: bold;">
                        Train No.<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center" style="font-weight: bold;">
                        Source<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center" style="font-weight: bold;">
                        Arrival<o:p></o:p></p>
                </td>
                <td style="width: 108pt; padding: .75pt .75pt .75pt .75pt">
                    <p align="center" style="font-weight: bold;">
                        Departure<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 1">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Swarna Shatabdi<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        12029<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        New Delhi<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        <span style="font-size: 9.0pt; line-height: 115%; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;">1:35 p.m.<o:p></o:p></span></p>
                </td>
                <td style="width: 108pt; padding: .75pt .75pt .75pt .75pt">
                    <p style="text-align: center">
                        <span style="font-size: 9.0pt; line-height: 115%; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;">7:20 <span style="mso-spacerun: yes">&nbsp;</span>a.m.<o:p></o:p></span></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 2">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Amritsar Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        13049<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Lucknow<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        <span style="font-size: 9.0pt; line-height: 115%; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;">10:10 a.m.<o:p></o:p></span></p>
                </td>
                <td style="width: 108pt; padding: .75pt .75pt .75pt .75pt">
                    <p align="center">
                        <span style="font-size: 9.0pt; line-height: 115%; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;">4:10 p.m..<o:p></o:p></span></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 3">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Tata Jat Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        18101<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Kanpur<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        07:50 a.m.<o:p></o:p></p>
                </td>
                <td style="width: 108pt; padding: .75pt .75pt .75pt .75pt">
                    <p align="center">
                        12:30 p.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 4">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Haridwar Amritsar Jan Shatabdi<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        12053<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Haridwar<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        10:05 p.m.<o:p></o:p></p>
                </td>
                <td style="width: 108pt; padding: .75pt .75pt .75pt .75pt">
                    <p align="center">
                        2:30 p.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 5">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Paschim Express Mumbai - Kalka<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        2925 / 2926<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Bandra Terminus<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        5:45 p.m.<o:p></o:p></p>
                </td>
                <td style="width: 108pt; padding: .75pt .75pt .75pt .75pt">
                    <p align="center">
                        11.35 a.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 6; mso-yfti-lastrow: yes">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Amritsar Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        11057<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Faridabad<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        4:30 p.m.<o:p></o:p></p>
                </td>
                <td style="width: 108pt; padding: .75pt .75pt .75pt .75pt">
                    <p align="center">
                        3:23 a.m.<o:p></o:p></p>
                </td>
            </tr>
        </table>
        <p id="Bathinda" style="text-align: center">
            <b style="mso-bidi-font-weight: normal; text-align: center;">BATHINDA<o:p>
        </o:p>
            </b>
        </p>
        <table border="1" cellpadding="0" cellspacing="1" style="width: 472.4pt; mso-cellspacing: .7pt; background: white; mso-yfti-tbllook: 1184; line-height: 115%; font-size: 11.0pt; font-family: Calibri, sans-serif;" width="630">
            <tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt; font-weight: bold;" width="169">
                    <p align="center" style="font-weight: bold;">
                        Name<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center" style="font-weight: bold;">
                        Train No.<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center" style="font-weight: bold;">
                        Source<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center" style="font-weight: bold;">
                        Arrival<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center" style="font-weight: bold;">
                        Departure<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 1">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Kisan Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        14519<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        New Delhi<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        10:10 p.m.<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        2:55 a.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 2">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Abadh Assam Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        15609<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Lucknow<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        10:00 p.m.<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        5:35 a.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 3">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        U Abhatoofan Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        13007<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Kanpur<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        3:15 a.m.<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        8:40 p.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 4">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Haridwar BME Link Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        24887<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Haridwar<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        3:35 a.m.<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p style="text-align: center">
                        7:10 <span style="mso-spacerun: yes">&nbsp;</span>p.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 5">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Punjab Mail<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        12137<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Mumbai CST<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        3:40 a.m.<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        7:40 p.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 6; mso-yfti-lastrow: yes">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Abadh Assam Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        15609<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Guwahati<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        10:00 p.m.<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        10:00 p.m.<o:p></o:p></p>
                </td>
            </tr>
        </table>
        <p id="Chandigarh" style="text-align: center">
            <b style="mso-bidi-font-weight: normal">
        <o:p>
            &nbsp;</o:p>CHANDIGARH<o:p>
        </o:p>
            </b>
        </p>
        <table border="1" cellpadding="0" cellspacing="1" style="width: 472.4pt; mso-cellspacing: .7pt; background: white; mso-yfti-tbllook: 1184; line-height: 115%; font-size: 11.0pt; font-family: Calibri, sans-serif;" width="630">
            <tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt; font-weight: bold;" width="169">
                    <p align="center" style="font-weight: bold;">
                        Name</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center" style="font-weight: bold;">
                        Train No.</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center" style="font-weight: bold;">
                        Source</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center" style="font-weight: bold;">
                        Arrival</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center" style="font-weight: bold;">
                        Departure</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 1">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Hawrah-Kalka Mail</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        12311 / 2312</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Howrah JN</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        03.25 a.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        01.10 a.m.</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 2">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Jodhpur-Kalka Express</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        4888 / 4887</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Barmer</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        05.20 a.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        10.25 p.m.</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 3">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Himalayan Queen</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        4095 / 4096</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Delhi S Rohalla</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        10.20 a.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        5.28 p.m.</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 4">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Shatabdi Express</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        2011 / 2012</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        New Delhi</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        11.02 a.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        6.20 p.m..</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 5">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Kerala Sampark Kranti Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        2653 / 2654<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Kerala<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p style="text-align: center">
                        4.00 p.m.<br />
                        (Mondays)<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p style="text-align: center">
                        08.43 a.m.<br />
                        (Wednesdays)<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 6">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Paschim Express Mumbai - Kalka</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        2925 / 2926</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Bandra Terminus</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        3.07 p.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        11.35 a.m.</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 7">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p style="text-align: center">
                        Jan Shatabdi Express<br />
                        (Not on Sundays)</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        2057 / 2058</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        New Delhi</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        8.00 p.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        10.30 a.m.</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 8">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Shatabdi Express</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        2005 / 2006</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        New Delhi</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        8.20 p.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        06.50 a.m.</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 9; mso-yfti-lastrow: yes">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Chennai - Chandigarh Express</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        6033 / 6034</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Chennai</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p style="text-align: center">
                        06.00 a.m.<br />
                        (Sundays)</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p style="text-align: center">
                        07.10 a.m.<br />
                        (Mondays)</p>
                </td>
            </tr>
        </table>
        <p id="Jalandhar" align="center">
            <b style="mso-bidi-font-weight: normal">JALANDHAR</b></p>
        <table border="1" cellpadding="0" cellspacing="1" style="width: 472.4pt; mso-cellspacing: .7pt; background: white; mso-yfti-tbllook: 1184; line-height: 115%; font-size: 11.0pt; font-family: Calibri, sans-serif;" width="630">
            <tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt; font-weight: bold;" width="169">
                    <p align="center" style="font-weight: bold;">
                        Name</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center" style="font-weight: bold;">
                        Train No.</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center" style="font-weight: bold;">
                        Source</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center" style="font-weight: bold;">
                        Arrival</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center" style="font-weight: bold;">
                        Departure</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 1">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        <a href="http://www.indianrail.gov.in/cgi_bin/inet_srcdest_cgi_time.cgi#SAMETRN"><span style="color: windowtext; text-decoration: none; text-underline: none">KIR ASR EXPRESS</span></a></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        15707</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        New Delhi</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        09:55 a.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        02:26 a.m.</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 2">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        JAMMU MAIL</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        14033</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        New Delhi</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        3:20 a.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        8:10 p.m.</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 3">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        SHANE PUNJAB</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        12497</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        New Delhi</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        12:54 p.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        6:40 a.m.</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 4">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        AKAL TAKHT EXP</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        12317</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Lucknow</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        3:38 p.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        2:25 a.m.</p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 5">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Paschim Express Mumbai - Kalka<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        2925 / 2926<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Bandra Terminus<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        5:45 p.m.<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        11.35 a.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 6; mso-yfti-lastrow: yes">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        TATA JAT EXP</p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        18101</p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Kanpur</p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        6:25 a.m.</p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        5:55 p.m.</p>
                </td>
            </tr>
        </table>
        <p align="center">
            <b id="Ludhiana" style="mso-bidi-font-weight: normal">LUDHIANA</b></p>
        <table border="1" cellpadding="0" cellspacing="1" style="width: 472.4pt; mso-cellspacing: .7pt; background: white; mso-yfti-tbllook: 1184; line-height: 115%; font-size: 11.0pt; font-family: Calibri, sans-serif;" width="630">
            <tr style="mso-yfti-irow: 0; mso-yfti-firstrow: yes">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt; font-weight: bold;" width="169">
                    <p align="center" style="font-weight: bold;">
                        Name<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center" style="font-weight: bold;">
                        Train No.<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center" style="font-weight: bold;">
                        Source<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center" style="font-weight: bold;">
                        Arrival<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center" style="font-weight: bold;">
                        Departure<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 1">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Shane Punjab<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        12497<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        New Delhi<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        <span style="font-size: 9.0pt; line-height: 115%; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;">11:55 a.m.<o:p></o:p></span></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        <span style="font-size: 9.0pt; line-height: 115%; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;">6:40 a.m.<o:p></o:p></span></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 2">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Abadh Assam Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        15609<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Lucknow<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        <span style="font-size: 9.0pt; line-height: 115%; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;">10:00 p.m.<o:p></o:p></span></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        <span style="font-size: 9.0pt; line-height: 115%; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;">5:35 a.m.<o:p></o:p></span></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 3">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Tata Jat Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        18101<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Kanpur<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        4:55 a.m.<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        12:30 p.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 4">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Haridwar Amritsar Jan Shatabdi<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        12053<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Haridwar<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        7:20 p.m.<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        2:30 p.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 5">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Paschim Express Mumbai - Kalka<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        12925
                    <o:p>
                    </o:p>
                    </p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Bandra Terminus<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        4:40 p.m.<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        11.35 a.m.<o:p></o:p></p>
                </td>
            </tr>
            <tr style="mso-yfti-irow: 6; mso-yfti-lastrow: yes">
                <td style="width: 126.55pt; padding: .75pt .75pt .75pt .75pt" width="169">
                    <p align="center">
                        Amritsar Express<o:p></o:p></p>
                </td>
                <td style="width: 83.3pt; padding: .75pt .75pt .75pt .75pt" width="111">
                    <p align="center">
                        11057<o:p></o:p></p>
                </td>
                <td style="width: 87.6pt; padding: .75pt .75pt .75pt .75pt" valign="top" width="117">
                    <p align="center">
                        Faridabad<o:p></o:p></p>
                </td>
                <td style="width: 73.5pt; padding: .75pt .75pt .75pt .75pt" width="98">
                    <p align="center">
                        1:25 p.m.<o:p></o:p></p>
                </td>
                <td style="width: 97.25pt; padding: .75pt .75pt .75pt .75pt" width="130">
                    <p align="center">
                        3:23 a.m.<o:p></o:p></p>
                </td>
            </tr>
        </table>
        <p style="text-align: center">
            <b style="mso-bidi-font-weight: normal">
        <o:p>
            &nbsp;</o:p></b></p>
    </div>
</asp:Content>

