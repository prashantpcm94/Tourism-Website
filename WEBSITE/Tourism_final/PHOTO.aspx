<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="PHOTO.aspx.cs" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:Label ID="Label15" runat="server" Font-Bold="True" Font-Size="X-Large" Font-Underline="True" ForeColor="#663300" Text="Photo Gallery"></asp:Label>
    <br />
        
    <asp:UpdatePanel ID="UpdatePanel3" runat="server">
        <ContentTemplate>
            <div style="position:absolute; top: 65px; left: 98px;">
            &nbsp;
            <asp:Menu ID="Menu1" runat="server" BackColor="#FFFBD6" DynamicHorizontalOffset="2" Font-Names="Verdana" Font-Size="Medium" ForeColor="#990000" Orientation="Horizontal" StaticSubMenuIndent="10px" BorderColor="#CCFF66" BorderStyle="Groove" RenderingMode="Table" OnMenuItemClick="Menu1_MenuItemClick" Height="36px" Width="700px" BorderWidth="4px">
                <DynamicHoverStyle BackColor="#663300" ForeColor="White" />
                <DynamicMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" />
                <DynamicMenuStyle BackColor="#FFFBD6" />
                <DynamicSelectedStyle BackColor="#FFFF66" />
                <Items>
                    <asp:MenuItem Text="Chandigarh" Value="1" Selected="True">
                    </asp:MenuItem>
                    <asp:MenuItem Text="Amritsar" Value="2">
                    </asp:MenuItem>
<asp:MenuItem Text="Jalandhar" Value="3">
</asp:MenuItem>
                    <asp:MenuItem Text="Ludhiana" Value="4">
                    </asp:MenuItem>
                </Items>
                <StaticHoverStyle BackColor="#663300" ForeColor="White" />
                <StaticMenuItemStyle HorizontalPadding="5px" VerticalPadding="2px" ForeColor="#663300" />
                <StaticSelectedStyle BackColor="#663300" ForeColor="#FFFF99" />
            </asp:Menu>
        </div>
        <br />
    <br />
    <br />
    <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div style="position:absolute; left: 73px; top: 241px; width: 32px; height: 206px;">
                <asp:Button ID="Button4" runat="server" BackColor="#663300" ForeColor="#FFFF99" Height="146px" OnClick="Button4_Click" style="margin-left: 0px; margin-top: 0px;" Text="&lt;" Width="34px" />
            </div>
            <div style="position:absolute; left: 761px; top: 240px; width: 32px; height: 186px;">
                <asp:Button ID="Button5" runat="server" BackColor="#663300" ForeColor="#FFFF99" Height="146px" OnClick="Button5_Click" style="margin-left: 0px; margin-top: 0px" Text="&gt;" Width="31px" />
            </div>
            <asp:Image ID="Image2" runat="server" Height="357px" style="margin-left: 124px;" Width="630px" ImageUrl="~/PICS/1/1.jpg"/>
            <br />
        </ContentTemplate>
        <Triggers >
            <asp:AsyncPostBackTrigger ControlID="Timer3" EventName="Tick" />
        </Triggers>
    </asp:UpdatePanel>
    <asp:Timer ID="Timer3" runat="server" Interval="3000" OnTick="Timer3_Tick">
    </asp:Timer>
<br />
<br />
    <div style="position:absolute; left: -3px; top: 741px; width: 870px; height: 692px;">
        <video controls="controls" style="width: 692px; height: 451px; margin-left: 89px; margin-top: 6px">
            <source src="PICS/Punjab%20Tourism%20-%20India%20begins%20here%20HD.mp4" />
        </video>
        <br />
        <asp:Label ID="Label17" runat="server" Text="Label"></asp:Label>
    </div>
</asp:Content>


