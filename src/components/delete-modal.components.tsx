import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

interface DeleteModalProps {
  open: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
  onConfirm: (id: number) => void;
  loading?: boolean;
  id: number;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  open,
  title = "Xác nhận xoá",
  message = "Bạn có chắc chắn muốn xoá mục này không?",
  onClose,
  onConfirm,
  loading = false,
  id,
}) => (
  <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{message}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} disabled={loading}>
        Huỷ
      </Button>
      <LoadingButton
        onClick={() => onConfirm(id)}
        color="error"
        variant="contained"
        loading={loading}
      >
        Xoá
      </LoadingButton>
    </DialogActions>
  </Dialog>
);

export default DeleteModal;
