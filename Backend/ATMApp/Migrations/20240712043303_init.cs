using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ATMApp.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountId",
                keyValue: 2,
                column: "AccountHolderName",
                value: "Jane karan");

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountId",
                keyValue: 3,
                column: "AccountHolderName",
                value: "Ramu");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountId",
                keyValue: 2,
                column: "AccountHolderName",
                value: "Jane Doe");

            migrationBuilder.UpdateData(
                table: "Accounts",
                keyColumn: "AccountId",
                keyValue: 3,
                column: "AccountHolderName",
                value: "John Doe");
        }
    }
}
