import { Clock, MessageSquare, Headphones } from "lucide-react";

function Card() {
  const cardData = [
    {
      icon: Headphones,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Upload Audio",
      description:
        "Support for various audio formats including MP3, WAV, and M4A",
    },
    {
      icon: Clock,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: "Fast Transcription",
      description:
        "Get accurate transcriptions with timestamps and speaker identification",
    },
    {
      icon: MessageSquare,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "AI Q&A",
      description:
        "Ask questions about your content and get intelligent answers",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
        >
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${item.bgColor}`}
          >
            <item.icon className={`w-8 h-8 ${item.iconColor}`} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-card">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
