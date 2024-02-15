from pyresparser import ResumeParser
import warnings

warnings.simplefilter("ignore")

file_path = r"C:\Users\ayses\Desktop\pyres\OmkarResume.pdf"  # Change this to the actual path of your resume PDF file

try:
    data = ResumeParser(file_path).get_extracted_data()
    
    print("Name:", data["name"])
    print("Email:", data["email"])
    print("Mobile Number:", data["mobile_number"])
    print("Skills:", data["skills"])
    print("College Name:", data["college_name"])
    print("Degree:", data["degree"])
    print("Designation:", data["designation"])
    print("Company Names:", data["company_names"])
    print("No Of Pages:", data["no_of_pages"])
    print("Total Experience:", data["total_experience"])

except Exception as e:
    print(f"Error: {e}")

