from tasks import send_email_heavy

print("🚀 Web đang gửi yêu cầu xử lý email vào hàng đợi Redis...")
# .delay() giúp gửi việc đi mà không cần đợi kết quả trả về ngay
send_email_heavy.delay("vinh_mai@example.com")
print("⚡ Web đã rảnh tay! Người dùng có thể làm việc khác ngay lập tức.")