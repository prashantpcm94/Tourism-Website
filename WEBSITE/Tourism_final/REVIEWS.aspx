<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="REVIEWS.aspx.cs" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <script>
        function d(x) {


        }
    </script>
   
    <p style="text-align: center">
        <asp:Label ID="Label16" runat="server" Font-Bold="True" Font-Size="X-Large" Font-Underline="True" ForeColor="#663300" Text="Reviews"></asp:Label>
        </p>
<p style="height: 22px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <asp:LinkButton ID="LinkButton10" runat="server" OnClick="LinkButton10_Click" ForeColor="#663300">CHANDIGARH</asp:LinkButton>
&nbsp;|
    <asp:LinkButton ID="LinkButton11" runat="server" OnClick="LinkButton11_Click" ForeColor="#663300">BATHINDA</asp:LinkButton>
&nbsp;|
    <asp:LinkButton ID="LinkButton12" runat="server" OnClick="LinkButton12_Click" ForeColor="#663300">AMRITSAR</asp:LinkButton>
&nbsp;|
    <asp:LinkButton ID="LinkButton13" runat="server" OnClick="LinkButton13_Click" ForeColor="#663300">JALANDHAR</asp:LinkButton>
&nbsp;|
    <asp:LinkButton ID="LinkButton14" runat="server" OnClick="LinkButton14_Click" ForeColor="#663300">LUDHIANA</asp:LinkButton>
    &nbsp;</p>
    <div style="height: 568px; overflow: scroll;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Label ID="Label15" runat="server" Font-Size="Larger" ForeColor="#663300" style="text-align: center" Text="Label" Visible="False"></asp:Label>
        <br />
        <br />
        
        <div style="position:absolute; top: 157px; left: 79px; height: 317px; width: 707px;">
        <asp:GridView ID="GridView2" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" Height="234px" Width="631px">
            <Columns>
                <asp:TemplateField>
                    <EditItemTemplate>
                        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                    </EditItemTemplate>
                    <ItemTemplate>
                        <asp:Image ID="Image1" runat="server" ImageUrl='<%# Eval("dp") %>' />
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:BoundField DataField="name" HeaderText="name" SortExpression="name" />
                <asp:BoundField DataField="review" HeaderText="review" SortExpression="review" />
            </Columns>
        </asp:GridView>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TourismConnectionString %>" SelectCommand="SELECT [dp], [name], [review] FROM [tbrev] WHERE ([city] = @city)">
            <SelectParameters>
                <asp:ControlParameter ControlID="Label15" Name="city" PropertyName="Text" Type="String" />
            </SelectParameters>
        </asp:SqlDataSource>
        </div>        
        <br />
        <br />
        <br />
        <br />
        
        <br />
        <br />
        <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
    <p id="FEED" style="height: 337px; margin-top: 40px; font-size: 24px; color: #663300;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SUBMIT A REVIEW &nbsp;</p>
    <div style="position:absolute; left: 15px; top: 760px; width: 842px; height: 350px;">
        <asp:TextBox ID="TextBox3" runat="server" Height="157px" style="margin-left: 164px; margin-top: 0px;" Width="480px"></asp:TextBox>
        <br />
        <br />
&nbsp;CITY&nbsp; NAME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:DropDownList ID="DropDownList1" runat="server" Height="36px" Width="133px">
            <asp:ListItem>chandigarh</asp:ListItem>
            <asp:ListItem>amritsar</asp:ListItem>
            <asp:ListItem>bathinda</asp:ListItem>
            <asp:ListItem>jalandhar</asp:ListItem>
            <asp:ListItem>ludhiana</asp:ListItem>
        </asp:DropDownList>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
            <asp:LinkButton ID="LinkButton15" runat="server" BackColor="#FFFBD6" BorderColor="#CCFF66" BorderStyle="Groove" Font-Underline="False" ForeColor="#663300" Height="24px" style="text-align: center" Width="80px" OnClick="LinkButton15_Click">SUBMIT</asp:LinkButton>
        <br />
        <br />
        <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <asp:Label ID="Label4" runat="server"></asp:Label>
    </div>
    <p style="height: 2px">&nbsp;</p>
   
</asp:Content>

