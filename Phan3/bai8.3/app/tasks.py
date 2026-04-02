from celery import Celery
import time

# Kết nối tới Redis (tên service là 'redis' trong docker-compose)
app = Celery('tasks', broker='redis://redis:6379/0')

@app.task
def send_email_heavy(email_address):
    print(f"📧 Đang bắt đầu gửi email cho: {email_address}...")
    time.sleep(5) # Giả lập việc gửi email tốn 5 giây
    print(f"✅ Đã gửi xong cho {email_address}!")
    return True