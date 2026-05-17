import PyPDF2
import sys

def extract_pages(pdf_path, output_path, num_pages=10):
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            total_pages = len(reader.pages)
            pages_to_extract = min(num_pages, total_pages)
            
            text = f"Total Pages: {total_pages}\n\n"
            for i in range(pages_to_extract):
                page = reader.pages[i]
                text += f"--- Page {i+1} ---\n"
                text += page.extract_text() + "\n\n"
                
            with open(output_path, 'w', encoding='utf-8') as out_file:
                out_file.write(text)
            print(f"Successfully extracted {pages_to_extract} pages to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_pages('1778907221280.pdf', 'extracted_first_pages.txt', 15)
