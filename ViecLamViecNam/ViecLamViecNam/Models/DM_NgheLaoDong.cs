namespace ViecLamViecNam.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class DM_NgheLaoDong
    {
        [Key]
        public int NgheLaoDong_ID { get; set; }

        [StringLength(500)]
        public string TenNgheLaoDong { get; set; }

        public int? NhomNganhLaoDong { get; set; }

        public DateTime? NgayTao { get; set; }

        public int? NguoiTao { get; set; }

        public bool? KichHoat { get; set; }

        [StringLength(100)]
        public string GhiChu { get; set; }
    }
}
