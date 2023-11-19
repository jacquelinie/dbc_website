from signup import signup, export_to_excel


def main():
    customer_id = signup("Tester One", "soxreceiver@gmail.com")["customer_id"]
    export_to_excel(customer_id)


if __name__ == "__main__":
    main()
