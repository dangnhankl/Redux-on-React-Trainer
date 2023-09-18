# Bài tập về Redux trong ReactJS

Đây là một bộ bài tập dành cho việc tự học và tự luyện tập về Redux trong ứng dụng ReactJS. Mục tiêu của bài tập này là giúp bạn làm quen với các khái niệm cơ bản và quy trình làm việc với Redux.

## Bài tập 1: Counter

**Bước 1: Tạo các types**

- `INCREMENT`: Loại action tăng giá trị.
- `DECREMENT`: Loại action giảm giá trị.

**Bước 2: Tạo actions (counterActions)**

- Tạo action creators cho `INCREMENT` và `DECREMENT`. Mỗi action creator sẽ trả về một action với payload (nếu cần).

**Bước 3: Tạo reducer**

- Tạo reducer để xử lý trạng thái hiện tại dựa trên action nhận được.

**Bước 4: Tạo giao diện (component Counter)**

- Tạo một giao diện để hiển thị giá trị hiện tại và nút để tăng/giảm giá trị. Sử dụng Redux để quản lý trạng thái.

## Bài tập 2: Todo List

**Bước 1: Tạo các types**

- `ADD_TODO`: Loại action để thêm một mục vào danh sách công việc cần làm.
- `DEL_TODO`: Loại action để xóa một mục khỏi danh sách công việc.
- `STATUS_TODO`: Loại action để cập nhật trạng thái của một công việc.

**Bước 2: Tạo actions (todoActions)**

- Tạo action creators cho `ADD_TODO`, `DEL_TODO`, và `STATUS_TODO`. Mỗi action creator sẽ trả về một action với payload (nếu cần).

**Bước 3: Tạo reducer**

- Tạo reducer để xử lý trạng thái hiện tại dựa trên các action nhận được.

**Bước 4: Tạo giao diện (component Todo List)**

- Tạo một giao diện để hiển thị danh sách công việc cần làm. Cho phép thêm, xóa và cập nhật trạng thái của các công việc.

## Bài tập 3: Đăng Nhập (Login)

**Bước 1: Tạo các types**

- `LOGIN_SUCCESS`: Loại action để xác định việc đăng nhập thành công.
- `LOGIN_FAILURE`: Loại action để xác định việc đăng nhập thất bại.
- `LOGOUT`: Loại action để đăng xuất.

**Bước 2: Tạo actions (authActions)**

- Tạo action creators cho `LOGIN_SUCCESS`, `LOGIN_FAILURE`, và `LOGOUT`. Mỗi action creator sẽ trả về một action với payload (nếu cần).

**Bước 3: Tạo reducer**

- Tạo reducer để xử lý trạng thái đăng nhập và lỗi dựa trên các action nhận được.

**Bước 4: Tạo giao diện (component Auth)**

- Tạo giao diện cho việc đăng nhập và hiển thị thông tin người dùng sau khi đăng nhập thành công. Xử lý đăng xuất và hiển thị lỗi (nếu có).

**Ghi chú**: Hãy chia sẻ thêm kiến thức với mình [Telegram của mình]. Chúc bạn chạy không bug ^^!


[Telegram của mình]: <https://t.me/nhanDN>
