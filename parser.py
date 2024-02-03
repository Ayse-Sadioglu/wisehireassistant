from pyresparser import ResumeParser
import warnings

warnings.simplefilter("ignore")

file_path = r"C:\Users\ayses\Desktop\pyres\OmkarResume.pdf"  # Change this to the actual path of your resume PDF file

try:
    data = ResumeParser(file_path).get_extracted_data()
    print("College Name:")
    print(data['college_name'])
    print("\n\n")

    print("Company Names:")
    print(data['company_names'])
    print("\n\n")

    print("Designation:")
    print(data['designation'])
    print("\n\n")

    print("Degree:")
    print(data['degree'])
    print("\n\n")

    print("Email:")
    print(data['email'])
    print("\n\n")

    print("Mobile Number:")
    print(data['mobile_number'])
    print("\n\n")

    print("Name:")
    print(data['name'])
    print("\n\n")

    print("Number of Pages:")
    print(data['no_of_pages'])
    print("\n\n")

    print("Total Experience:")
    print(data['total_experience'])
    print("\n\n")

    print("Skills:")
    print(data['skills'])

except Exception as e:
    print(f"Error: {e}")

