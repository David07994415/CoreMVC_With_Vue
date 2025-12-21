using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Components
{
	public class LatestNewsViewComponent : ViewComponent
	{
		public IViewComponentResult Invoke()
		{
			// 模擬資料，實際可從資料庫或 API 取得
			var news = new List<string>
			{
				"AI 技術最新突破",
				"C# .NET Core 更新",
				"雲端服務趨勢"
			};

			return View(news);
		}
	}
}
